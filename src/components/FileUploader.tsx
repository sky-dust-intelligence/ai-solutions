const FileUploader = ({ handleFile }) => {
  return <input type="file" onChange={(e) => handleFile(e.target.files[0])} />;
};
export default FileUploader;
