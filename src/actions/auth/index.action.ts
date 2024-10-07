import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { register } from "./register.action";
import { logout } from "./logout.action";

export const registerUser = defineAction({
    accept:"form",
    input: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        rememberMe: z.boolean().optional(),
    }),
    handler: async ({name, email, password, rememberMe}, {cookies}) => register({name, email, password, rememberMe}, cookies),
})

export const logoutUser = defineAction({
    accept: "json",
    handler: async ({}) => logout()
})