'use client';

import FormOptions  from '@/app/ui/items/form-options';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createItem, ItemState } from '@/app/lib/actions';
import GetDesc from '@/app/lib/paragraphs';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useActionState, useEffect, useState } from 'react';
import { useDropzone } from "react-dropzone";
import { XMLParser } from "fast-xml-parser";

export default function ItemForm() {
    const initialState: ItemState = { message: null, errors: {} };
    const [state, formAction] = useActionState(
        createItem,
        initialState,
    );
    const [formData, setFormData] = useState({
        name: "",
        extension: "",
        summary: "",
        description: "",
        quality: "",
        capacity: "",
        adaptable: "",
        interaction: "",
        motivation: "",
        design: "",
        reusable: "",
        portable: "",
        toughness: "",
        structure: "",
        navigation: "",
        operable: "",
        av_accessible: "",
        text_accessible: "",
    });
    const [show, setShow] = useState<number | null>(null);
    const changeShow = (n : number) => {setShow(show == n ? null : n)}

    const { acceptedFiles:bigAccept, getRootProps:getRootBigProps, getInputProps:getInputBigProps } = useDropzone({
        accept: {
        "application/xml": [".xml"],
        "text/xml": [".xml"],
        },
        multiple: false,
    });
    const { acceptedFiles:lilAccept, getRootProps:getRootLilProps, getInputProps:getInputLilProps } = useDropzone({
        multiple: false,
    });

    useEffect(() => {
        const loadXml = async () => {
            if (bigAccept.length === 0){
                return;
            }
            const xmlString = await bigAccept[0].text();
            const parser = new XMLParser();
            const result = parser.parse(xmlString);
            setFormData({
                name: result.metadata.name,
                extension: result.metadata.extension,
                summary: result.metadata.summary,
                description: result.metadata.description,
                quality: result.metadata.quality,
                capacity: result.metadata.capacity,
                adaptable: result.metadata.adaptable,
                interaction: result.metadata.interaction,
                motivation: result.metadata.motivation,
                design: result.metadata.design,
                reusable: result.metadata.reusable,
                portable: result.metadata.portable,
                toughness: result.metadata.toughness,
                structure: result.metadata.structure,
                navigation: result.metadata.navigation,
                operable: result.metadata.operable,
                av_accessible: result.metadata.av_accessible,
                text_accessible: result.metadata.text_accessible,
            });
        };

        loadXml();
    }, [bigAccept]);

    useEffect(() => {
        if (lilAccept.length === 0) {
            return;
        };
        const file = lilAccept[0];
        const parts = file.name.split('.');
        const fileExtension = parts.pop() || "";
        const fileName = parts.join('.');
        setFormData(prev => ({
            ...prev,
            name: fileName,
            extension: fileExtension,
        }));

    }, [lilAccept]);
    const colors = ["rose", "red", "orange", "yellow", "lime", "green", "emerald", "cyan", "indigo", "purple", "fuchsia", "pink", "rose", "slate", "stone"];

    return (
        <div className="flex justify-end gap-2">
            <form action={formAction}>
                <div className="rounded-md bg-gray-50 p-4 md:p-6" aria-describedby="general-error">
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                            Nombre del archivo
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="File name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                    aria-describedby="name-error"
                                />
                            </div>
                            <div id="name-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.name &&
                                state.errors.name.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Extension */}
                    <div className="mb-4">
                        <label htmlFor="extension" className="mb-2 block text-sm font-medium">
                            Extension del archivo
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="extension"
                                    name="extension"
                                    type="text"
                                    placeholder="File extension"
                                    value={formData.extension}
                                    onChange={(e) => setFormData({ ...formData, extension: e.target.value })}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                    aria-describedby="extension-error"
                                />
                            </div>
                            <div id="extension-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.extension &&
                                state.errors.extension.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* File description */}
                    <div className="mb-4">
                        <label htmlFor="summary" className="mb-2 block text-sm font-medium">
                            Descripcion del archivo
                        </label>
                        <div className="relative mt-2 rounded-md">
                            <div className="relative">
                                <input
                                    id="summary"
                                    name="summary"
                                    type="text"
                                    placeholder="File description"
                                    value={formData.summary}
                                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                                    className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                    aria-describedby="summary-error"
                                />
                            </div>
                            <div id="summary-error" aria-live="polite" aria-atomic="true">
                                {state.errors?.summary &&
                                state.errors.summary.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Evaluated fields */}
                    <fieldset className="mb-4" aria-describedby="description-error">
                        <div className="flex flex-row justify-start">
                            <FormOptions field="description" num={Number(formData.description)} numOpt={Number(6)} color={colors[0]}></FormOptions>
                            {show === 0 ? (
                                <button onClick={() => changeShow(0)} className="rounded-md border p-2 bg-white hover:bg-gray-200">
                                    <ChevronDownIcon className="w-5" />
                                </button>
                                ):(
                                    <button onClick={() => changeShow(0)} className="rounded-md border p-2 bg-white hover:bg-gray-200">
                                        <ChevronRightIcon className="w-5" />
                                    </button>
                            )}
                        </div>
                        <div id="description-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.description &&
                            state.errors.description.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                        {show === 0 && (
                            <div>
                                <GetDesc rule={1} section={1}/>
                            </div>
                        )}
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="quality-error">
                         <div className="flex flex-row justify-start">
                            <FormOptions field="quality" num={Number(formData.quality)} numOpt={Number(7)} color={colors[1]}></FormOptions>
                            {show === 1 ? (
                                <button onClick={() => changeShow(1)} className="rounded-md border p-2 bg-white hover:bg-gray-200">
                                    <ChevronDownIcon className="w-5" />
                                </button>
                                ):(
                                    <button onClick={() => changeShow(1)} className="rounded-md border p-2 bg-white hover:bg-gray-200">
                                        <ChevronRightIcon className="w-5" />
                                    </button>
                            )}
                        </div>
                        <div id="quality-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.quality &&
                            state.errors.quality.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                        {show === 1 && (
                            <div>
                                <GetDesc rule={2} section={2}/>
                            </div>
                        )}
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="capacity-error">
                        <FormOptions field="capacity" num={Number(formData.capacity)} numOpt={Number(4)} color={colors[2]}></FormOptions>
                        <div id="capacity-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.capacity &&
                            state.errors.capacity.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="adaptable-error">
                        <FormOptions field="adaptable" num={Number(formData.adaptable)} numOpt={Number(5)} color={colors[3]}></FormOptions>
                        <div id="adaptable-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.adaptable &&
                            state.errors.adaptable.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="interaction-error">
                        <FormOptions field="interaction" num={Number(formData.interaction)}  numOpt={Number(5)} color={colors[4]}></FormOptions>
                        <div id="interaction-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.interaction &&
                            state.errors.interaction.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="motivation-error">
                        <FormOptions field="motivation" num={Number(formData.motivation)} numOpt={Number(5)} color={colors[5]}></FormOptions>
                        <div id="motivation-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.motivation &&
                            state.errors.motivation.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="design-error">
                        <FormOptions field="design" num={Number(formData.design)} numOpt={Number(8)} color={colors[6]}></FormOptions>
                        <div id="design-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.design &&
                            state.errors.design.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="reusable-error">
                        <FormOptions field="reusable" num={Number(formData.reusable)} numOpt={Number(3)} color={colors[7]}></FormOptions>
                        <div id="reusable-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.reusable &&
                            state.errors.reusable.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="portable-error">
                        <FormOptions field="portable" num={Number(formData.portable)} numOpt={Number(5)} color={colors[8]}></FormOptions>
                        <div id="portable-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.portable &&
                            state.errors.portable.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="toughness-error">
                        <FormOptions field="toughness" num={Number(formData.toughness)} numOpt={Number(4)} color={colors[9]}></FormOptions>
                        <div id="toughness-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.toughness &&
                            state.errors.toughness.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="structure-error">
                        <FormOptions field="structure" num={Number(formData.structure)} numOpt={Number(4)} color={colors[10]}></FormOptions>
                        <div id="structure-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.structure &&
                            state.errors.structure.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="navigation-error">
                        <FormOptions field="navigation" num={Number(formData.navigation)} numOpt={Number(11)} color={colors[11]}></FormOptions>
                        <div id="navigation-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.navigation &&
                            state.errors.navigation.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="operable-error">
                        <FormOptions field="operable" num={Number(formData.operable)} numOpt={Number(6)} color={colors[12]}></FormOptions>
                        <div id="operable-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.operable &&
                            state.errors.operable.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="av_accessible-error">
                        <FormOptions field="av_accessible" num={Number(formData.av_accessible)} numOpt={Number(7)} color={colors[13]}></FormOptions>
                        <div id="av_accessible-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.av_accessible &&
                            state.errors.av_accessible.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                    <fieldset className="mb-4" aria-describedby="text_accessible-error">
                        <FormOptions field="text_accessible" num={Number(formData.text_accessible)} numOpt={Number(7)} color={colors[14]}></FormOptions>
                        <div id="text_accessible-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.text_accessible &&
                            state.errors.text_accessible.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                        </div>
                    </fieldset>
                </div>
                <div id="general-error" aria-live="polite" aria-atomic="true">
                    {state.message ?
                        <p className="mt-2 text-sm text-red-500" key={state.message}>
                        {state.message}
                        </p>
                        : <></>
                    }
                </div>
                <div className="mt-6 flex justify-between gap-4">
                    <Link
                    href="/dashboard/files"
                    className="flex h-10 items-center rounded-lg bg-red-400 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-red-500"
                    >
                        Cancelar
                    </Link>
                    <Button type="submit">Crear Archivo</Button>
                </div>
            </form>
            <div className="flex flex-col justify-start items-center">
                <section className="container">
                    <div {...getRootBigProps({ className: "flex flex-col justify-center px-8 py-8 mx-2 mb-4 border border-dashed rounded-2xl border-black hover:border-gray-500" })}>
                        <input {...getInputBigProps()} />
                        <p>Arrastra aquí el archivo XML con metadatos o haz click para seleccionar</p>
                    </div>
                </section>
                <p>------ o ------</p>
                <section className="container2">
                    <div {...getRootLilProps({ className: "flex flex-col justify-center px-8 py-8 mx-2 my-4 border border-dashed rounded-2xl border-black hover:border-gray-500" })}>
                        <input {...getInputLilProps()} />
                        <p>Arrastra aquí el documento sobre el que quieres los metadatos o haz click para seleccionar</p>
                    </div>
                </section>
            </div>
        </div>
    );
}