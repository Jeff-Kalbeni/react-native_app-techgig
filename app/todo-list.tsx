import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';

type TodoItem = {
  id: number;
  name: string;
  isCompleted: boolean;
  priorityLevel: string;
  date: number;
};

const Todo_list = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [changingTodoId, setChangingTodoId] = useState<number | null>(null)


  const handleAddTodo = () => {
    if(!todo.trim()) return;
    const newTodo =  {
      id: Math.random(),
      name: todo,
      isCompleted: false,
      priorityLevel: "Low",
      date: new Date().getTime()
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  }

  return (
    <SafeAreaView style={{marginHorizontal: 20, paddingTop: 10, gap:10}}>
      <TextInput
        value={todo}
        onChangeText={(text) => setTodo(text)}
        placeholder="Enter to-do item"
        style={{
          borderColor:"gray",
          borderWidth:1,
          padding: 15,
          borderRadius: 10
        }}
      />
      <TouchableOpacity style={{
        backgroundColor:"#006AFF",
        borderRadius:10,
        padding: 10,
        alignItems:"center"
      }}
      onPress={handleAddTodo}
      >
        <Text style={{color: "white"}}>Add Todo</Text>
      </TouchableOpacity>

      <View style={{gap:10}}>
        {todos.map((item) => (
          <View key={item.id} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center", gap:3}}>
              <FontAwesome name="circle-thin" size={10} color="black" />
              <Text style={{fontSize:17}}>{item.name}</Text>
            </View>

            <View style={{flexDirection:"row", gap:5}}>
              <Feather name="edit" size={20} color="black" />
              <Feather
                onPress={()=>handleDeleteTodo(item.id)} name="trash"
                size={20}
                color="black" />
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Todo_list