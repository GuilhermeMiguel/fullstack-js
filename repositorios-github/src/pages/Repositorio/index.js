import React, { useState, useCallback, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Loading, Owner,  BackButton, IssuesList, PageActions, FilterList } from './styles';

import api from '../../services/api';


export default function Repositorio({match}) {

    //states

    //Quando é um único conjunto de itens numa state, não é uma state de array, mas sim de um objeto
    const [repositorio, setRepositorio] = useState({});
    
    //No caso das issues como são mais de uma, é um array vazio
    const [issues, setIssues] = useState([]);

    const [loading, setLoading] = useState(true);

    const [alerta, setAlerta] = useState(null);

    const [page, setPage] = useState(1);

    const [estado, setEstado] = useState('');

    const [filters, setFilters] = useState([
        {state: 'all', label: 'Todas', active: true},
        {state: 'open', label: 'Abertas', active: false},
        {state: 'closed', label: 'Fechadas', active: false}
    ]);

    const [filterIndex, setFilterIndex] = useState(0);

    //DidMount -- Buscar
    useEffect(()=> {
        
        async function load(){
            const nomeRepo = decodeURIComponent(match.params.repositorio);
        
            //desconstrução de array
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: filters.find(f => f.active).state, //pegando a state daquele botao que esta ativo
                        per_page: 5     //5 por página
                    }
                })
            ]);

            setRepositorio(repositorioData.data);
            setIssues(issuesData.data);

            setLoading(false);
        }

        load();
        

    }, [filters, match.params.repositorio]); //A const(state) filters não é alterada 

    
    //Como a state atualiza, ele precisa buscar as issues novamente e renderizar novamente essas issues de acordo com a pagina
    useEffect(()=> {

        async function loadIssue(){
          const nomeRepo = decodeURIComponent(match.params.repositorio);
    
          const response = await api.get(`/repos/${nomeRepo}/issues`, {
            params:{
              state: filters[filterIndex].state,
              page, //passando a pagina que eu quero, como o parametro tem o mesmo nome da variavel (state), posso mandar so ele 
              per_page: 5,
            },
          });
    
          setIssues(response.data);
    
        }
    
        loadIssue();
    
      }, [filterIndex, filters, match.params.repositorio, page]);



    function handlePage(action){
        setPage(action === 'back' ? page - 1 : page + 1 )
    }


    function handleFilter(index){
        setFilterIndex(index);
    }
    
   
    if (loading){
        return(
        <Loading>
            <h1>Carregando...</h1>
        </Loading>
        )
    }

    return(
        <Container>
            <BackButton to="/">
                <FaArrowLeft color="#000" size={30}/>
            </BackButton>
           <Owner>
               <img 
                    src={repositorio.owner.avatar_url}
                    alt={repositorio.owner.login}
                />
                <h1>{repositorio.name}</h1>
                <p>{repositorio.description}</p>
           </Owner>

            {/* Outra forma de fazer 
            
                <button onClick={() => setEstado('open')}>Open</button>
                <button onClick={() => setEstado('closed')}>Closed</button>
                <button onClick={() => setEstado('all')}>All</button> 
            */}

            <FilterList active={filterIndex}>
                {filters.map((filter, index) => (
                    <button 
                        type="button"
                        key={filter.label}
                        onClick={() => {handleFilter(index)}}
                    >
                        {filter.label}
                    </button>
                ))}
            </FilterList>

           <IssuesList>
                {issues.map(issue => (
                    <li key={String(issue.id)}>
                    <img src={issue.user.avatar_url} alt={issue.user.login} />

                    <div>
                        <strong>
                        {/* Link externo eu posso utilizar o link comum com o a e href */}
                        <a href={issue.html_url} target="_blank">{issue.title}</a>

                        {issue.labels.map(label => (
                            <span key={String(label.id)}>{label.name}</span>
                        ))}

                        </strong>

                        <p>{issue.user.login}</p>

                    </div>

                    </li>
                ))}
            </IssuesList>


            <PageActions>
                <button 
                    type="button" 
                    onClick={()=> handlePage('back') }
                    disabled={page < 2}
                >
                    Voltar
                </button>

                <button type="button" onClick={()=> handlePage('next') }>
                    Proxima
                </button>
            </PageActions>


          </Container>
    )
}