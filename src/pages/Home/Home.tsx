import { memo } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux"
import Student from "../../components/Students/Student"



const Home = () => {
    const student = useSelector((state: RootState) => state.studentSlice)

    return (
        <div>
            <Student data={student?.value}/>
        </div>
    )
}

export default memo(Home)
