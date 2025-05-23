import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GalleryVerticalEnd, LogInIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";

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
                            <form>
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
                                                className='border-gray-300 focus:border-blue-200 transition-colors duration-300'
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
                                        <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-2xl hover:shadow-indigo-500/25 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 flex items-center justify-center gap-2 ">
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
