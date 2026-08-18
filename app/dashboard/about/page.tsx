import { Metadata } from 'next';
import UneStandard from '@/app/ui/une-standard';

export const metadata: Metadata = {
  title: 'Informacion',
};

export default function Page(){

    return(
        <div className="w-full">
            <UneStandard />
        </div>
    );
}