import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GalleryVerticalEnd, LogInIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import SignUpForm from './SignUpForm'

export const metadata: Metadata = {
    title: "Sign Up"
}

export default function page() {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <Card className='border-gray-300'>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">Sign Up to rizzUp</CardTitle>
                            <CardDescription className='text-xs'>
                                Ready to level up your vibe? Join RizzUp and start connecting with real ones who match your energy
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <SignUpForm />
                        </CardContent>
                    </Card>
                    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                        and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </div>
    )
}
