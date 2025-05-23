"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LogInIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { signUpSchema, SignUpValues } from '@/lib/validation'
import { Form } from '@/components/ui/form'

export default function SignUpForm() {
    const [error, setError] = useState<string>();

    const form = useForm<SignUpValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            username: "",
            password: "",
        },
    });

    async function onSubmit(values: SignUpValues) {

    }

    return (
        <Form {...form}>
            <form>
                {error && <p className="text-center text-destructive">{error}</p>}
                <div className="grid gap-6">
                    <div className="flex flex-col gap-4">
                        <Button variant="outline" className="w-full border border-gray-300 hover:border-blue-300 transition-colors duration-300 rounded-md px-4 py-2">
                            <FcGoogle />
                            Login with Google
                        </Button>
                    </div>
                    <div className="relative text-center text-sm">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder=""
                                required
                                className='border-gray-300 focus:border-blue-200 transition-colors duration-300'
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                className='border-gray-300 focus:border-blue-200 transition-colors duration-300 placeholder:text-gray-400'
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="#"
                                    className="ml-auto text-sm underline-offset-4 hover:underline text-blue-400 font-semibold"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                            <Input id="password" type="password" required className='border-gray-300 focus:border-blue-200 transition-colors duration-300'/>
                        </div>
                        <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-2xl hover:shadow-indigo-500/25 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 flex items-center justify-center gap-2 ">
                            <LogInIcon className="w-5 h-5" />
                            Login
                        </Button>
                    </div>
                    <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/login" className="underline underline-offset-4">
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    )
}
