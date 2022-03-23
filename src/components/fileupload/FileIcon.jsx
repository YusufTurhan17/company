import styled from "styled-components";
import { ReactComponent as FileInput } from "../../assets/icons/file.svg"


const StyledFileIcon = styled.div`
    width: 50px;
    height: 50px;
    border: 0.05rem solid rgba(255,255,255,0.5);
    padding: 0;
    background-color: rgba(0,0,0,0);
    color: #ffffff;
    border-radius: 50%;
    margin-right: 0.7rem;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: #fff;
        color: #000;
    }
`

const FileIcon = () => {
    return <StyledFileIcon>
            <FileInput/>
        </StyledFileIcon>
}

export default FileIcon