import React, { useState } from "react";
import marked from "marked";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleFormatText = (format) => {
    const selectedText = window.getSelection().toString();
    let updatedContent;

    switch (format) {
      case "bold":
        updatedContent = content.replace(selectedText, `**${selectedText}**`);
        break;
      case "italic":
        updatedContent = content.replace(selectedText, `*${selectedText}*`);
        break;
      case "underline":
        updatedContent = content.replace(
          selectedText,
          `<u>${selectedText}</u>`
        );
        break;
      default:
        updatedContent = content;
    }

    setContent(updatedContent);
  };

  const handleAddLink = () => {
    const linkText = prompt("Enter the link text");
    const linkUrl = prompt("Enter the link URL");
    const linkMarkdown = `[${linkText}](${linkUrl})`;

    const updatedContent = content + linkMarkdown;
    setContent(updatedContent);
  };

  const handleAddImage = () => {
    const imageUrl = prompt("Enter the image URL");
    const imageMarkdown = `![Image](${imageUrl})`;

    const updatedContent = content + imageMarkdown;
    setContent(updatedContent);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFormatText("bold")}>Bold</button>
        <button onClick={() => handleFormatText("italic")}>Italic</button>
        <button onClick={() => handleFormatText("underline")}>Underline</button>
        <button onClick={handleAddLink}>Add Link</button>
        <button onClick={handleAddImage}>Add Image</button>
      </div>

      <textarea
        value={content}
        onChange={handleInputChange}
        placeholder="Write your content here..."
      />

      <div>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </div>
  );
};

export default TextEditor;
