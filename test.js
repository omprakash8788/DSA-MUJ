let resources=["socket","socketb", "fileA"];
while(!resources.isEmpty()){
    for(resource of resources){
        data=resource.read();
    }
}
