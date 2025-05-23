"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState, useTransition } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'
import { loginSchema, LoginValues, signUpSchema, SignUpValues } from '@/lib/validation'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { PasswordInput } from '@/components/PasswordInput'
import LoadingButton from '@/components/LoadingButton'
import { login } from './actions'

export default function LoginForm() {
    const [error, setError] = useState<string>();
    const [isPending, startTransition] = useTransition()

    const form = useForm<LoginValues>({
        resolver: zodResolver(loginSchema),

        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(values: LoginValues) {
        setError(undefined);
        startTransition(async () => {
            const { error } = await login(values);
            if (error) setError(error);
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                    {/* <div className="flex flex-col gap-4">
                        <Button variant="outline" className="w-full border border-gray-300 hover:border-blue-300 transition-colors duration-300 rounded-md px-4 py-2">
                            <FcGoogle />
                            Login with Google
                        </Button>
                    </div>
                    <div className="relative text-center text-sm">
                        <span className="relative z-10 bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div> */}
                    {error && <p className="text-center text-red-500 text-sm font-semibold">{error}</p>}
                    <div className="grid gap-4">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} className='border-gray-300 focus:border-blue-200 transition-colors duration-300 placeholder:text-gray-400'/>
                                    </FormControl>
                                    <FormMessage className='text-xs text-red-500'/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="Password" {...field} className='border-gray-300 focus:border-blue-200 transition-colors duration-300 placeholder:text-gray-400'/>
                                    </FormControl>
                                    <FormMessage className='text-xs text-red-500'/>
                                </FormItem>
                            )}
                        />

                        <LoadingButton loading={isPending} type="submit" className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-2xl hover:shadow-indigo-500/25 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 flex items-center justify-center gap-2">
                            Create account
                        </LoadingButton>
                    </div>
                    <div className="text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="underline underline-offset-4">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </form>
        </Form>
    )
}
