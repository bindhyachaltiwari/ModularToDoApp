import { Component } from "react";


class App extends Component {
	constructor(props) {
	    super(props);
	    this.state ={
	      tasks:[]
	    }
	  }
	  componentDidMount() {
	    this.fetchAPiCall();
	  }
	  fetchAPiCall() {
	    const main = this;
	    fetch('http://www.mocky.io/v2/5bbb8ce0320000680027e992')
	  .then( function(response) {
	    return response.json();
	  })
	  .then( function(response) {
	      let tasks = response.ToDo.Tasks;
	      main.setState({
	          tasks :tasks
	      });
	  });

	  }
	

	removeTask = id => {
		let tasks = this.state.tasks.map(item => {
			if(item.id === id)
				item.done = true;
			return (item);
		});
		this.setState({
			tasks
		})
	}

	addTasks = description => {
		this.setState(previousState => ({
			tasks: [
						...previousState.tasks, 
						{
							id: previousState.tasks[previousState.tasks.length - 1]['id'] + 1,
					     	text: description,
					     	done: false
						}
					]
				})
			)
		}

	render() {
		return (
			this.props.children({
		      tasks: this.state.tasks,
		      removeTask: this.removeTask,
		      addTasks: this.addTasks
		    })
		);
	}
}

export default App;