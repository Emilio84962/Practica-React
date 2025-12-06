// Estructura basica de un componente funcional en React

const Saludo = ({nombre}) => {
    return (
        <div>
            <h1 className="text-red-600 text-3xl">
                Hola {nombre} Bienvenido a nuestro sitio Web
            </h1>

        </div>
    )
};

export default Saludo;
