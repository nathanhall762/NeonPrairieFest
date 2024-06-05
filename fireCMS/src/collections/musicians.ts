// @ts-nocheck
import { EntityCollection } from "@firecms/cloud";

export const MusicianCollection: EntityCollection = {
    id: 'musicians',
    name: 'Musicians',
    singularName: 'Musician',
    path: 'musicians',
    editable: true,
    icon: 'music_note',
    group: 'Artists',
    properties: {
        id: {
            name: 'ID',
            dataType: 'string',
            propertyConfig: 'text_field',
            description: 'Unique identifier for the musician',
        },
        name: {
            name: 'Name',
            dataType: 'string',
            propertyConfig: 'text_field',
            description: 'Name of the musician',
        },
        profileImage: {
            name: 'Profile Image',
            dataType: 'string',
            storage: {
                storagePath: 'musicians/profile_images',
                storeUrl: true,
            },
            propertyConfig: 'file_upload',
            description: 'Profile image of the musician',
        },
        profileImageSmall: {
            name: 'Profile Image',
            dataType: 'string',
            storage: {
                storagePath: 'musicians/profile_images_small',
                storeUrl: true,
            },
            propertyConfig: 'file_upload',
            description: 'Profile image of the musician',
        },
        genre: {
            name: 'Genre',
            dataType: 'array',
            of: {
                dataType: 'string',
                propertyConfig: 'text_field',
            },
            propertyConfig: 'repeat',
            description: 'Genres associated with the musician',
        },
        music: {
            name: 'Music',
            dataType: 'map',
            properties: {
                bandcamp: {
                    name: 'Bandcamp',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'Bandcamp URL',
                },
                spotify: {
                    name: 'Spotify',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'Spotify URL',
                },
                youtube: {
                    name: 'YouTube',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'YouTube URL',
                },
                soundcloud: {
                    name: 'SoundCloud',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'SoundCloud URL',
                },
                twitch: {
                    name: 'Twitch',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'Twitch URL',
                },
            },
            propertyConfig: 'group',
            description: 'Links to musician\'s music platforms',
        },
        social: {
            name: 'Social Media',
            dataType: 'map',
            properties: {
                facebook: {
                    name: 'Facebook',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'Facebook URL',
                },
                instagram: {
                    name: 'Instagram',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'Instagram URL',
                },
                tiktok: {
                    name: 'TikTok',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'TikTok URL',
                },
                threads: {
                    name: 'Threads',
                    dataType: 'string',
                    propertyConfig: 'url',
                    description: 'Threads URL',
                },
            },
            propertyConfig: 'group',
            description: 'Links to musician\'s social media profiles',
        },
    },
    subcollections: [],
};
