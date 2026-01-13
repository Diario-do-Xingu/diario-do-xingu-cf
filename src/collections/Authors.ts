import { CollectionConfig } from 'payload'

export const Authors: CollectionConfig = {
  slug: 'authors',
  fields: [{ name: 'name', type: 'text', label: 'Nome', unique: true, required: true }],
}
