import { Branch } from "./Branch"

export const index = () => {

    const branchMain = new Branch("main")
    branchMain.createCommit("First commit")
    branchMain.createCommit("add component [SideBar]")
    branchMain.createCommit("fix function [getFormateMoney]")
    // branchMain.printLogs()

    const branchFixLogin = branchMain.clone()
    branchFixLogin.changeName("Fix login")
    branchFixLogin.popCommit()
    branchFixLogin.createCommit("fix the input email")
    branchFixLogin.createCommit("fix the response to endpoint [login]")
    // branchFixLogin.printLogs()

}

index()