export const checkURL = url => {
    if(url !== "")
    {
        if (String(url).match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null)
            return true;
        else {
            return false;
        }
    }
}