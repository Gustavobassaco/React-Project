// import logo from './logo.svg';
import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../Utils/loadPost';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------
// Separação de componentes
export default class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3,
    searchValue: ''
  };

  async componentDidMount() {
    const { page, postsPerPage } = this.state;
    const postAndPhothos = await loadPosts();
    this.setState({
      posts: postAndPhothos.slice(page, postsPerPage),
      allPosts: postAndPhothos,
    })
  }

  loadMorePosts = () => {
    const { page, postsPerPage, allPosts, posts } = this.state
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      searchValue: value
    })
  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    // operação ternária
    const filteredPosts = !!searchValue ?
      allPosts.filter(
        (post) => 
          post.title.toLowerCase().includes(
            searchValue.toLowerCase()
          )
      )
      : posts;


    return (
      <div className='container'>
        {!!searchValue && (
          <div>
            <h1>Search value: {searchValue}</h1>
          </div>
        )}
        <div className='container-input'>
          <SearchInput 
          searchValue={searchValue}
          handleChange={this.handleChange}/>
        </div>
        {filteredPosts.length === 0 &&  (
          <h1>Nenhum Post encontrado</h1>
        )}
        <Posts   posts={filteredPosts} />
        {!searchValue && (
          <div className='container-button'>
            <Button text="More Posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          </div>
        )}
      </div>
    );
  }
}


// -----------------------------------------------------------------------------------
// Buscando dados de externos com Data fetching
// class App extends Component {
//   state = {
//     posts: [],
//   };

//   componentDidMount() {
//     this.loadPosts();
//   }

//   loadPosts = async () => {
//     const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
//     const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

//     const [posts] = await Promise.all([postsResponse]);
//     const [photos] = await Promise.all([photosResponse]);

//     const postsJson = await posts.json();
//     const photosJson = await photos.json();

//     const PostAndPhothos = postsJson.map((post, index) => {
//       return {
//         ...post, cover: photosJson[index].url
//       }
//     })

//     this.setState({
//       posts: PostAndPhothos,
//     })
//   }

//   render() {
//     const { posts } = this.state;
//     return (
//       <div className='container'>
//         <div className='posts'>
//           {posts.map(post => (
//             <div className="post">
//               <img src={post.cover} alt={post.title}/>
//               <div key={post.id} className='post-content'>
//                 <h1 >{post.title}</h1>
//                 <p>{post.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// -----------------------------------------------------------------------------------
// lifecycle methods
/*componentDidMount: Executado após o componente ser inserido no DOM. Ideal para carregar dados ou configurar assinaturas.
componentDidUpdate: Chamado após atualizações de props ou estado. Usado para responder a mudanças e atualizar o DOM.
componentWillUnmount: Executado antes de o componente ser removido. Usado para limpar assinaturas ou recursos.*/
// class App extends Component {
//   state = {
//     posts: [],
//     counter: 0
//   };

//   timeoutUpdate = null;
//   // executado uma vez após ele ser montado
//   // abaixo simulando o retorno de uma requisição a uma API
//   componentDidMount() {
//     this.handleInit();
//   }

//   componentDidUpdate() {
//     this.handleTimeout()
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timeoutUpdate)
//   }

//   handleInit = () => {
//     this.setState({
//       posts: [{ id: 0, title: "Conectando", body: "a" }]
//     })
//   }

//   handleTimeout = () => {
//     const { counter } = this.state;
//     this.timeoutUpdate = setTimeout(() => {
//       this.setState({
//         posts: [
//           {
//             id: 1,
//             title: "Titulo 1",
//             body: 'Corpo 1'
//           }, {
//             id: 2,
//             title: "Titulo 2",
//             body: 'Corpo 2'
//           }, {
//             id: 3,
//             title: "Titulo 3",
//             body: 'Corpo 3'
//           },
//         ],
//         counter: counter + 1
//       })
//     }, 1000)
//   }

//   render() {
//     const { posts, counter } = this.state;
//     return (
//       <div className="App">
//         <h1>{counter}</h1>
//         {posts.map(post => (
//           <div key={post.id}>
//             <h1 >{post.title}</h1>
//             <p>{post.title}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }


// -----------------------------------------------------------------------------------
// introdução a state com arrays
// class App extends Component {
//   state = {
//     posts: [
//       {
//         id: 1,
//         title: "Titulo 1",
//         body: 'Corpo 1'
//       }, {
//         id: 2,
//         title: "Titulo 2",
//         body: 'Corpo 2'
//       }, {
//         id: 3,
//         title: "Titulo 3",
//         body: 'Corpo 3'
//       },
//     ]
//   };

//   // usando Hard coding
//   render() {
//     const { posts } = this.state;
//     return (
//       <div className="App">
//         {/* key otimiza performance e previne erros */}
//         {posts.map(post => (
//           <div key={post.id}>
//             <h1 >{post.title}</h1>
//             <p>{post.title}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// -----------------------------------------------------------------------------------
// Aula inicial

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.onClickP = this.onClickP.bind(this)


//     // this.state = {
//     state = {
//       name: "Gustavo",
//       cont: 0
//     };
//   // }

//   // onClickP (){ 
//   onClickP = () => {
//     this.setState({
//       name: "Bassaco"
//     })
//   }

//   onClickA = (event) => {
//     // para impedir oq o evento original iria fazer (abri nova guia)
//     event.preventDefault();
//     const {cont} = this.state
//     this.setState({
//       cont: cont + 1
//     });
//   } 

//   // função render precisa retornar um jsx
//   render() {

//     const {name, cont} = this.state;

//     return (
//       // componentes React precisam começar com letra maiúscula
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.onClickP}>
//             {name} {cont}
//           </p>
//           <a onClick={this.onClickA}
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// -----------------------------------------------------------------------------------
// App original do nopx create-react-app .

// function App() {
//   return (
//     // componentes React precisam começar com letra maiúscula
//     <div className="App"> 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {console.log(11231)}wrwerkwjherkjwher <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// permite a utilização do componente fora do arquivo
