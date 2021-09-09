import React, { useState, useCallback, useEffect } from 'react';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Form, SubmitButton, List, DeleteButton  } from './styles';

import api from '../../services/api';


export default function Main() {

    //states

    const [newRepo, setNewRepo] = useState('');

    const [repositorios, setRepositorios] = useState([]);

    const [loading, setLoading] = useState(false);

    const [alerta, setAlerta] = useState(null);


    //DidMount -- Buscar
    useEffect(()=> {
        const repoStorage = localStorage.getItem('repos');

        if(repoStorage) {
            setRepositorios(JSON.parse(repoStorage));
        }

    }, []);


    //DidUpdate -- Salvar alterações
    useEffect(()=> {
        localStorage.setItem('repos', JSON.stringify(repositorios));
    }, [repositorios]);





    const handleSubmit= useCallback((e) => {
        e.preventDefault();
        
        //para utilizar um async await dentro de um useCallback 
        async function submit() {     
            setLoading(true);
            setAlerta(null);

            try {

                if(newRepo === ''){
                    throw new Error('Você precisa indicar um repositorio!');
                }

                const hasRepo = repositorios.find(repo => repo.name === newRepo);

                if(hasRepo) {
                    throw new Error('Repositorio Duplicado');
                }

                const response = await api.get(`repos/${newRepo}`);
                
                const data = {
                    name: response.data.full_name,
                }
    
                //Aqui eu utilizo o rest operator para pegar o que ja tem dentro da state e adicionar a parte nova e não sobrepor
                setRepositorios([...repositorios, data]);
                
                //limpando o input
                setNewRepo('');

            } 
            catch(error) {
                console.log(error);
                setAlerta(true);
            } 
            finally{
                setLoading(false);
            }
           
        }

        //chamando a funcao submit porque logo acima eu só criei ela 
        submit();
       
        
    }, [newRepo, repositorios]); 
    //passando as states para o useCallback -- para quando elas forem atualizadas ele seja chamdo 


    //Não to manipulando states, então uso useCallback mesmo
    function handleInputChange(e) {
        setNewRepo(e.target.value);
        setAlerta(null);
    }

    const handleDelete = useCallback((repo) => {
        
        //filtando todos os repositorios diferente do que estou tentando apagar
        const find = repositorios.filter(r => r.name !== repo);
        
        //Estou soprepondo o nome dos repositorios menos aquele que quero deletar
        setRepositorios(find);

    }, [repositorios]);
    //estou trabalhando com a state repositorios

    return(
        <Container>
            <h1>
                <FaGithub size={25}/>
                Meus Repositorios
            </h1>

            <Form onSubmit={handleSubmit} error={alerta}>
                <input 
                    type="text" 
                    placeholder="Adicionar Repositorios"
                    value={newRepo}
                    onChange={handleInputChange}
                />

                {/* passando uma props que posso resgatar no styled components -- aqui passando se é true or false */}
                <SubmitButton loading={loading ? 1 : 0}>

                    { loading ? (
                        //Renderização condicional
                        <FaSpinner color="#FFF" size={14}/>
                        ) : (
                            <FaPlus color="FFF" size={14}/>
                        )
                    }
                    
                </SubmitButton>
            </Form>

            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={14}/>
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20}/>
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    )
}