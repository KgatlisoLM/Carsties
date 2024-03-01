"use client";

import { useParamsStore } from "@/hooks/useParamsStore";
import { Button, Dropdown } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi2";

type Props = {
  user: User
}


function UserActions({user}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const setParams = useParamsStore(state => state.setParams);

  function setWinner() {
     setParams({winner: user.username, seller: undefined});
     if(pathname  !== '/') router.push('/');
  }

  function setSeller() {
    setParams({seller: user.username, winner: undefined});
    if(pathname  !== '/') router.push('/');
  }


  return (
    <Dropdown label={`Welcome 👋 ${user.name}`} inline>
      <Dropdown.Item icon={HiUser} onClick={setSeller}>
            My Auctions
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillTrophy} onClick={setWinner}>
            Auction won
      </Dropdown.Item>
      <Dropdown.Item icon={AiFillCar}>
        <Link href="/auctions/create">
            Sell my car
        </Link>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        <Link href="/session">
            Session (dev only)
        </Link>
      </Dropdown.Item>
      <Dropdown.Item icon={AiOutlineLogout} onClick={() => signOut({callbackUrl: '/'})}>
         Sign out
      </Dropdown.Item>
    </Dropdown>
  );
}

export default UserActions;
