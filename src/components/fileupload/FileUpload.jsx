import PropTypes from 'prop-types'
import { useState } from 'react';
import styled from "styled-components";
import FileIcon from "./FileIcon";
 
const StyledLabel = styled.label`
        cursor: pointer;
        padding: 0.8rem 0;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
`

const StyledFileInput = styled.input`
    position: absolute;
    visibility: hidden;
    left: -100%;
    top: -100%;
`

const StyledSpan = styled.span``

const FileUpload = ({children, id, ...otherProps}) => {
  const [files, setFiles] = useState()

  const handleChange = (event) => setFiles(event.target.files)

    return <StyledLabel htmlFor={id}>
            <FileIcon />
            {files ? Array.from(files).map(({ name }) => <StyledSpan key={name}>{name}</StyledSpan>) : "Lütfen Dosya Seçiniz!"}
            <StyledFileInput onChange={handleChange} type="file" id={id} {...otherProps} />
          </StyledLabel>
}

FileUpload.propTypes = {
  children: PropTypes.node
}

export default FileUpload