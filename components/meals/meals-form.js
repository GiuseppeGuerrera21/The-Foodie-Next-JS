'use client'

import { useFormStatus } from "react-dom"

export default function MealsButtonForm() {
    const { pending } = useFormStatus();

    return (<button type="submit" disabled={pending}>
        {pending ? 'Saving...' : 'Save'}
    </button>)
}