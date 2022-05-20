import { useRecoilState, useRecoilValue } from "recoil";
import { currentUserState, userDataState } from "../state/atoms";

const SelectUser = () => {
    
    const [ userId, setUserId] = useRecoilState(currentUserState);
    const userData = useRecoilValue(userDataState);

    console.log({userData})
    return <>
        <select id="user" onChange={(e) => setUserId(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </select>
        {
          userData && <><p> Name : { userData.name}</p>
          <p> Email : { userData.email}</p>
          </>
        }
    </>
}

export default SelectUser;