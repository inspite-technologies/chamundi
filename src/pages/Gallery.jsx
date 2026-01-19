import React from 'react';

const Gallery = () => {
    const imageNumbers = Array.from({ length: 50 }, (_, i) => (i + 1).toString().padStart(3, '0'));

    return (
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
            <h1>Image Selection Helper</h1>
            <p>Please check these images and tell me which numbers correspond to the <strong>Main Hall</strong> and <strong>Private Studio</strong>.</p>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '20px',
                marginTop: '40px'
            }}>
                {imageNumbers.map(num => (
                    <div key={num} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '10px' }}>
                        <img
                            src={`/images/${num}.jpg`}
                            alt={`Image ${num}`}
                            style={{ width: '100%', borderRadius: '5px' }}
                        />
                        <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{num}.jpg</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
