import { NextResponse } from 'next/server'

type AsyncRouteHandler = (...args: unknown[]) => Promise<Response>

export const catchAsync = (
    fn: AsyncRouteHandler
): AsyncRouteHandler => {
    return async (...args: unknown[]): Promise<Response> => {
        try {
            return await fn(...args)
        } catch (error) {
            console.error('Error in route:', error)
            return NextResponse.json(
                { error: 'Internal Server Error' },
                { status: 500 }
            )
        }
    }
}
