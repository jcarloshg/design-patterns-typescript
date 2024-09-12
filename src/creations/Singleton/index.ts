import { UserSingleton } from "./User"

export const index = () => {

    const userSingleton = UserSingleton.instance
    userSingleton.setKeys({ userName: "jcarloshg654", token: "okij-uhyg2346-wert3459-aavb876" })

}

index()