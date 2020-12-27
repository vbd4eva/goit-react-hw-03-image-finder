import { Component } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery'
import Searchbar from './components/Searchbar/Searchbar'

class App extends Component {
  state = {
    submitedSearchQuery: '',
  }

  
  handleFormSubmit = submitedSearchQuery => {
    if(submitedSearchQuery !== this.state.submitedSearchQuery) this.setState({ submitedSearchQuery });
  }

  render() {
      return (
    <div className="App">
          <Searchbar onSubmit={this.handleFormSubmit} />

          {
            this.state.submitedSearchQuery
            &&
            <ImageGallery searchQuery={this.state.submitedSearchQuery}/>
          }
          
    </div>
  );
  }
}

export default App;
