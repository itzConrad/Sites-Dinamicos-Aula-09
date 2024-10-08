import { defineField, defineType } from 'sanity'

export const artistType = defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        defineField({

            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'venue',
            type: 'reference',
            to: [{ type: 'venue' }],
        }),
        defineField({
            name: 'date',
            type: 'date',
        }),
        defineField({
            name: 'email',
            type: 'email',
        }),
        defineField({
            name: 'telefone',
            type: 'string',
        }),
        defineField({
            name: 'imagemPerfil',
            type: 'image',
        }),
        defineField({
            name: 'ativo',
            type: 'boolean'
        }),
        defineField({
            name: 'artistId',  
            title: 'Artist ID',
            type: 'string',
            description: 'Identificador único para o artista',
        }),
    ],
})