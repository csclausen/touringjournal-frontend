import React from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'; // Add css for snow theme

export default function Editor() {
    const { quill, quillRef } = useQuill();
  
    React.useEffect(() => {
      if (quill) {
        quill.on('text-change', (delta, oldDelta, source) => {
          console.log('Text change!');
          console.log(quill.getText()); // Get text only
          console.log(quill.getContents()); // Get delta contents
          console.log(quill.root.innerHTML); // Get innerHTML using quill
          console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        });
      }
    }, [quill]);
  
    return (
      <div className="flex-auto overflow-hidden">
        <div ref={quillRef} />
      </div>
    );
};