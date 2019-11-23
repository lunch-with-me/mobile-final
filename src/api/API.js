export const PROTOCOL = 'http://';
export const HOST = '192.168.8.103:8080';
//API URL 
export const BASEURL = `${PROTOCOL}${HOST}`;
export const LOGIN = `${PROTOCOL}${HOST}/users/authenticate`;
export const SIGNUP = `${PROTOCOL}${HOST}/users/Mregister`;
export const SIGNUP2=`${PROTOCOL}${HOST}/users/registerdetails`;
export const FORGOTPASSWORD1=`${PROTOCOL}${HOST}/users/forgotpasswordEmailVerification`;
export const FORGOTPASSWORD3=`${PROTOCOL}${HOST}/users/forgotPassword`;
export const CHAT_LIST = `${PROTOCOL}${HOST}/users/muserList`;
export const MESSAGE = `${PROTOCOL}${HOST}/messages`;
export const MAPTIME = `${PROTOCOL}${HOST}/users/meet`; 
export const NEARBY_USERS = `${PROTOCOL}${HOST}/users/all`; 
export const LIKE = `${PROTOCOL}${HOST}/users/request`; 
export const ALL_USERS = `${PROTOCOL}${HOST}/users/allusers`;
export const MYPROFILE2 = `${PROTOCOL}${HOST}/users/getSugestedProfileDetails`;