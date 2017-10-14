import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addTodo: function(){
			var date = this.get('date');
			var title = this.get('title');
			var body = this.get('body');

			//criar nova tarefa:
			var newTodo = this.store.createRecord('todo', {
				title: title,
				body: body,
				date: new Date(date)
			});

			//Salvar no Firebase
			newTodo.save();

			//Limpar o formulário
			this.setProperties({
				title: '',
				body: '', 
				date: ''
			});
		}
	}
});
