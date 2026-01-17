import React, { useState } from 'react';
import LiveEditor from './editor/LiveEditor';

const LevelContainer = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);

    if (!data) return <div className="p-4">Level not found</div>;

    const activeSection = data.sections[activeTab];

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
                <h1 className="text-4xl mb-4 text-white">{data.title}</h1>
                <p className="text-xl text-secondary">{data.description}</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                {data.sections.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveTab(index)}
                        className={`btn ${index === activeTab ? 'btn-primary' : ''}`}
                        style={{
                            backgroundColor: index === activeTab ? '' : 'var(--bg-secondary)',
                            color: index === activeTab ? 'white' : 'var(--text-secondary)'
                        }}
                    >
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="card">
                <h2 className="text-2xl mb-4 text-white">{activeSection.title}</h2>

                {/* Theory Content (Rendered HTML) */}
                <div
                    className="theory-content text-secondary"
                    style={{ lineHeight: '1.8', fontSize: '1.1rem' }}
                    dangerouslySetInnerHTML={{ __html: activeSection.content }}
                />

                <div className="mt-4 p-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid var(--accent-primary)', borderRadius: '4px' }}>
                    <strong>Task:</strong> Practice the code below! Edit the HTML on the left to see changes on the right.
                </div>
            </div>

            {/* Editor */}
            <LiveEditor
                key={activeSection.id} // Re-mount editor on section change to reset code
                initialCode={activeSection.initialCode}
                title={`Editor - ${activeSection.title}`}
            />
        </div>
    );
};

export default LevelContainer;
