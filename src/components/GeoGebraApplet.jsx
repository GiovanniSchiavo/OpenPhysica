import React, { useState, useEffect } from 'react';

const GeoGebraApplet = ({ filename, id }) => {
    const [adjustedFilename, setAdjustedFilename] = useState('');

    useEffect(() => {
        let newFilename = filename;
        if (!filename.startsWith('/')) {
            const currentPath = window.location.pathname;
            // Adjust basePath to match your specific directory structure
            const basePath = currentPath.replace("docs", 'geogebra');
            newFilename = `${basePath}/${filename}`;
        }
        setAdjustedFilename(newFilename);
    }, [filename]);

    useEffect(() => {
        if (adjustedFilename) {
            const params = {
                filename: adjustedFilename,
                scaleContainerClass: 'geogebra-container',
                showMenuBar: false,
                showToolBar: false,
                preventFocus: true,
                showResetIcon: true,
                enableRightClick: false,
                allowUpscale: true,
                showFullscreenButton: true,	
                showAlgebraInput: false,
                autoHeight: true,
                borderRadius: 10,
            };
            const ggbApplet = new window.GGBApplet(params, true);
            ggbApplet.inject(id);
        }
    }, [adjustedFilename, id]);

    return <div className="geogebra-container"><div id={id}></div></div>;
};

export default GeoGebraApplet;