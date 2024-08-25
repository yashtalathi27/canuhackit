import React from 'react'
import {useAppStore} from "../store/index.js";
import {PrettyChatWindow} from "react-chat-engine-pretty";

export const ChatPage = () => {
    const {userInfo} = useAppStore();

    return (
        <div style={{height:'100vh'}} >
            <PrettyChatWindow projectId='8d2487ea-2b27-40a6-908d-8d950408de01'
                              username={userInfo.displayName}
                              secret={userInfo.displayName}
            />

        </div>
    )
}
