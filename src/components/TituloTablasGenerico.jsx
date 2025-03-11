import React from 'react';

const TituloTablasGenerico = ({titulo}) => {
    return (
        <div className="flex justify-center p-6 w-full">
            <h1 className="text-2xl font-bold">{titulo}</h1>
        </div>
    );
};

TituloTablasGenerico.propTypes = {

};

export default TituloTablasGenerico;