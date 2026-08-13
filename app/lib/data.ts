import postgres from 'postgres';
import {
  ItemData,
  LatestItem,
  User,
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchLatestItems() {
  try {
    const data = await sql<LatestItem[]>`
      SELECT data.id, data.name, data.extension, data.date, users.name AS username
      FROM data
      JOIN users ON data.user_id = users.id
      ORDER BY data.date DESC
      LIMIT 5`;

    const latestItems = data.map((item) => ({
      ...item,
    }));
    return latestItems;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest items');
  }
}

export async function fetchLatestFriendItems(id: string) {
  try {
    const data = await sql<LatestItem[]>`
      SELECT data.id, data.name, data.extension, data.date, users.name AS username
      FROM data
      JOIN users ON data.user_id = users.id
      JOIN friends ON friends."userIdTarget" = users.id
      WHERE friends."userIdSource" = ${id}
        AND friends.accepted = TRUE
      UNION
      SELECT data.id, data.name, data.extension, data.date, users.name AS username
      FROM data
      JOIN users ON data.user_id = users.id
      JOIN friends ON friends."userIdSource" = users.id
      WHERE friends."userIdTarget" = ${id}
        AND friends.accepted = TRUE
      ORDER BY date DESC
      LIMIT 6`;

    const latestItems = data.map((item) => ({
      ...item,
    }));
    return latestItems;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Error obteniendo los ultimos archivos de tus amigos');
  }
}

export async function fetchUserNumber() {
  try{
    const userNum = await sql`SELECT COUNT(*) FROM users`;
    const uNum = Number(userNum[0].count);

    return uNum;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Can not fetch user number');
  }
}

export async function fetchUserByName(name: string) {
  try {
    const user = await sql<User[]>`
      SELECT id, name, email, password
      FROM users u
      WHERE u.name = ${name}
    `;

    return user[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Can not fetch user by name');
  }
}

export async function nameRepeated(name: string) {
  try {
    const result = await sql<{ exists: boolean }[]>`
      SELECT EXISTS(
        SELECT 1
        FROM users u
        WHERE u.name = ${name}
      )as exists
    `;

    return result[0].exists;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Can not check user name availability');
  }
}

export async function emailRepeated(email: string) {
  try {
    const result = await sql<{ exists: boolean }[]>`
      SELECT EXISTS(
        SELECT 1
        FROM users u
        WHERE u.email = ${email}
      )as exists
    `;

    return result[0].exists;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Can not check email availability');
  }
}

export async function fetchFriendNumber(id: string) {
  try{
    const friendNum = await sql`
      SELECT COUNT(*) AS total
      FROM friends f
      WHERE f.accepted = true
      AND (
        f."userIdSource" = ${id}
        OR f."userIdTarget" = ${id}
      )
    `;
    const fNum = Number(friendNum[0].count);

    return fNum;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Can not fetch friend number');
  }
}

export async function fetchFriends(id: string) {
  try {
    const friends = await sql<User[]>`
      SELECT u.*
      FROM friends f
      JOIN users u ON u.id = f."userIdTarget"
      WHERE f."userIdSource" = ${id}
      AND f.accepted = true
      UNION
      SELECT u.*
      FROM friends f
      JOIN users u ON u.id = f."userIdSource"
      WHERE f."userIdTarget" = ${id}
      AND f.accepted = true
    `;

    return friends;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch friends.');
  }
}

export async function fetchFriendRequests(id: string) {
  try {
    const friends = await sql<User[]>`
      SELECT u.*
      FROM friends f
      JOIN users u ON u.id = f."userIdSource"
      WHERE f."userIdTarget" = ${id}
      AND f.accepted = false
    `;

    return friends;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch friend requests.');
  }
}

export async function areWeFriends(id1: string, id2: string) {
  if(id1.localeCompare(id2) == 0){
    return false;
  }

  try {
    const result = await sql<{ exists: boolean }[]>`
      SELECT EXISTS(
        SELECT 1
        FROM friends f
        WHERE (
            (f."userIdTarget" = ${id1}
            AND f."userIdSource" = ${id2})
          OR
            (f."userIdTarget" = ${id2}
            AND f."userIdSource" = ${id1})
        )AND f.accepted = true
      )as exists
    `;

    return result[0].exists;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to prove friendship.');
  }
}

export async function areWeRequested(id1: string, id2: string) {
  if(id1.localeCompare(id2) == 0){
    return false;
  }
  
  try {
    const result = await sql<{ exists: boolean }[]>`
      SELECT EXISTS(
        SELECT 1
        FROM friends f
        WHERE (
            (f."userIdTarget" = ${id1}
            AND f."userIdSource" = ${id2})
          OR
            (f."userIdTarget" = ${id2}
            AND f."userIdSource" = ${id1})
        )AND f.accepted = false
      )as exists
    `;

    return result[0].exists;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to prove friendship.');
  }
}

export async function fetchItemNumber(id: string) {
  try{
    const itemNum = await sql`
      SELECT COUNT(*) 
      FROM data
      WHERE data.user_id = ${id}
    `;
    const iNum = Number(itemNum[0].count);

    return iNum;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Can not fetch item number');
  }
}

export async function fetchItemById(id: string) {
  try {
    const data = await sql<ItemData[]>`
      SELECT *
      FROM data
      WHERE data.id = ${id}
    `;

    const item = data.map((e) => ({
      ...e,
    }));

    console.log(item);
    return item[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch item');
  }
}

export async function fetchFilteredItemsUserId(
  query: string,
  currentPage: number,
  id: string,
) {
  const offset = (currentPage - 1) * 10;

  try {
    const data = await sql<ItemData[]>`
      SELECT *
      FROM data
      WHERE (data.name::text ILIKE ${`%${query}%`} OR
        data.extension::text ILIKE ${`%${query}%`} OR
        data.summary::text ILIKE ${`%${query}%`}) AND
        data.user_id = ${id}
      LIMIT 10 OFFSET ${offset}
    `;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered items');
  }
}

export async function fetchItemPagesUserId(query: string, id: string) {
  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM data
      WHERE (data.name::text ILIKE ${`%${query}%`} OR
        data.extension::text ILIKE ${`%${query}%`} OR
        data.summary::text ILIKE ${`%${query}%`}) AND
        data.user_id = ${id}
    `;

    const totalPages = Math.ceil(Number(data[0].count) / 10);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of items');
  }
}

export async function fetchItemByUserId(id: string) {
  try {
    const data = await sql<ItemData[]>`
      SELECT *
      FROM data
      WHERE data.user_id = ${id}
    `;

    const item = data.map((e) => ({
      ...e,
    }));

    return item[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch item');
  }
}

export async function fetch5ItemsByUserId(id: string) {
  try {
    const data = await sql<ItemData[]>`
      SELECT *
      FROM data
      WHERE data.user_id = ${id}
      ORDER BY date DESC
      LIMIT 5
    `;

    const items = data.map((e) => ({
      ...e,
    }));

    return items;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all items');
  }
}

export async function fetchAllItemsByUserId(id: string) {
  try {
    const data = await sql<ItemData[]>`
      SELECT *
      FROM data
      WHERE data.user_id = ${id}
    `;

    const items = data.map((e) => ({
      ...e,
    }));

    return items;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch all items');
  }
}