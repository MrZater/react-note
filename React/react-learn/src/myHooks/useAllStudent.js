import {
    useEffect,
    useState
} from "react";
import {
    getAllStudents
} from "../services/student";

export default function useAllStudents() {
    const [students, setStudents] = useState([])
    useEffect(() => {
            (async () => {
                let stus = await getAllStudents()
                setStudents(stus)
            })()
    }, [])
    return students
}