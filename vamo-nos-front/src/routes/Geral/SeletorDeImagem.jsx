import React, {useState} from "react";

const SeletorDeImagem = () => {
    const [imagem, setImagem] = useState(null);

    const handleImagemChange = (event) => {
        const file = event.target.files[0];

        if(file){
            //inserir no servidor (criar lógica para armazenar)
            console.log(`Imagem selecionada: ${file}`);

            //para ler o arquivo
            const reader = new FileReader();
            reader.onload = () => {
                setImagem(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input className="login-inputs" type="file" accept="image/*" onChange={handleImagemChange} />
            {imagem && <img src={imagem} alt="Imagem selecionada" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </div>
    )
};

export default SeletorDeImagem;