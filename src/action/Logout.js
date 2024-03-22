import { redirect } from "react-router-dom";
import { deleteItem } from "../helper";
import { toast } from "react-toastify";

export async function LogoutAction(){

    //delete user
    deleteItem({
        key: 'userName'
    })

    toast.success("You've successfully deleted your account")

    //redirect user
    return redirect("/")
}