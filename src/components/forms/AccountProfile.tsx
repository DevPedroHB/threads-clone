"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AccountProfileFormSchema = z.object({
  image: z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});

export type AccountProfileFormData = z.infer<typeof AccountProfileFormSchema>;

export function AccountProfile() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AccountProfileFormData>({
    resolver: zodResolver(AccountProfileFormSchema),
    defaultValues: {
      image: "",
      name: "",
      username: "",
      bio: "",
    },
  });

  function handleAccountProfile(data: AccountProfileFormData) {
    console.log(data);

    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleAccountProfile)}>
      <div>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="text"
          placeholder="Image"
          {...register("image")}
        />
        {errors.image && <span>{errors.image.message}</span>}
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          {...register("username")}
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" placeholder="Bio" {...register("bio")} />
        {errors.bio && <span>{errors.bio.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
