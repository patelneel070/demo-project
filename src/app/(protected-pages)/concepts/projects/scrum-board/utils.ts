import type { Ticket } from './types'

export const createUID = (len: number) => {
    const buf = [],
        chars =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        charlen = chars.length,
        length = len || 32

    for (let i = 0; i < length; i++) {
        buf[i] = chars.charAt(Math.floor(Math.random() * charlen))
    }
    return buf.join('')
}

export const createCardObject = (): Ticket => {
    return {
        id: createUID(10),
        name: 'Untitled Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        cover: '',
        members: [],
        labels: ['Task'],
        attachments: [],
        comments: [],
        dueDate: null,
    }
}

export const taskLabelColors: Record<string, string> = {
    'Live issue': 'bg-rose-200 ',
    Task: 'bg-blue-200 ',
    Bug: 'bg-amber-200 ',
    'Low priority': 'bg-purple-200 ',
}

export const labelList = ['Task', 'Bug', 'Live issue', 'Low priority']
