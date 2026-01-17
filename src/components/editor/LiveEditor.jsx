import React, { useState, useEffect } from 'react';
import './LiveEditor.css';

const LiveEditor = ({ initialCode = '', title = 'Code Playground' }) => {
    const [code, setCode] = useState(initialCode);
    const [srcDoc, setSrcDoc] = useState('');

    // Debounce the preview update to avoid flickering while typing
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <head>
            <style>
              body { font-family: sans-serif; padding: 1rem; color: #333; }
            </style>
          </head>
          <body>${code}</body>
        </html>
      `);
        }, 250);

        return () => clearTimeout(timeout);
    }, [code]);

    // Update local state when prop changes
    useEffect(() => {
        setCode(initialCode);
    }, [initialCode]);

    return (
        <div className="editor-container">
            <div className="editor-header">
                <span className="editor-title">{title}</span>
                <button className="editor-reset" onClick={() => setCode(initialCode)}>Reset Code</button>
            </div>
            <div className="panes">
                <div className="pane editor-pane">
                    <div className="pane-label">HTML Input</div>
                    <textarea
                        className="code-input"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        spellCheck="false"
                    />
                </div>
                <div className="pane preview-pane">
                    <div className="pane-label">Live Preview</div>
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default LiveEditor;
