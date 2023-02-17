import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "da0347fa63854c09acd9da079e3ee309";
const token =
  "007eJxTYFATXPbKLuqy+plkmzsdXUmVBn2mNy+sPzzNXjDsoUDQ9loFhpREA2MT87REM2MLU5NkA8vE5BRLoJi5ZapxaqqxgWXMm3fJDYGMDBcWarAyMkAgiM/KUJaZkprPwAAAcQ0gfg==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "video";