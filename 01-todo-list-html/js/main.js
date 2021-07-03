var users = [
    { id: 1, task: 'a', level: 0, },
    { id: 2, task: 'c', level: 2, },
    { id: 3, task: 'e', level: 1, },
];

function arrToList(users) {
    users.forEach(function sumElement(user) {
        // tạo một thẻ tr
        var tr = document.createElement('tr');
        // tạo thẻ td
        var td_id = document.createElement('td');
        var td_task = document.createElement('td');
        var td_level = document.createElement('td');
        var td_btn_Edit = document.createElement('button');
        var td_btn_Delete = document.createElement('button');

        var span = document.createElement('span');
        // tạo dữ liệu 
        var id = document.createTextNode(user.id);
        var task = document.createTextNode(user.task);

        function createLevel() {
            if (user.level == 0) {
                span.className = "badge badge-secondary";
                return "Low";
            } else if (user.level == 1) {
                span.className = "badge badge-info";
                return "Medium";
            } else {
                span.className = "badge badge-danger";
                return "High";

            }
        }
        span.appendChild(document.createTextNode(createLevel()));
        //thêm class
        td_id.className = "text-center";
        td_level.className = "text-center";
        td_btn_Edit.className = "btn btn-warning";
        td_btn_Delete.className = "btn btn-danger";
        td_btn_Edit.type = "Button";
        td_btn_Delete.type = "Button";

        // gán id = user_id để sử dụng chức năng edit , delete
        td_btn_Edit.id = user.id;
        td_btn_Delete.id = user.id;

        // đổ dữ liệu 
        td_id.appendChild(id);
        td_task.appendChild(task);
        td_level.appendChild(span);
        td_btn_Edit.appendChild(document.createTextNode("Edit"));
        td_btn_Delete.appendChild(document.createTextNode("Delete"));

        tr.appendChild(td_id);
        tr.appendChild(td_task);
        tr.appendChild(td_level);
        tr.appendChild(td_btn_Edit)
        tr.appendChild(td_btn_Delete)
        document.getElementById("show").appendChild(tr);
    });
}

function resetAndAdd() {
    document.getElementById("show").innerHTML = " ";
    arrToList(users);
}


arrToList(users);
// thêm mới 
function get() {
    var taskName = document.getElementById("taskName").value;
    var level = document.getElementById("level").value;
    Number(level);
    var newTask = { id: users.length, task: taskName, level: level };
    users.push(newTask);
    resetAndAdd()
}

// sắp xếp
var sort_by = function(field, reverse, primer) {

    var key = primer ?
        function(x) { return primer(x[field]) } :
        function(x) { return x[field] };

    reverse = !reverse ? 1 : -1;

    return function(a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
    }
}

function Name_ASC() {
    users.sort(sort_by('task', false, function(a) { return a.toUpperCase() }));
    document.getElementById("Sort").innerHTML = "Name ASC"
    resetAndAdd();
}

function Name_DESC() {
    users.sort(sort_by('task', true, function(a) { return a.toUpperCase() }));
    document.getElementById("Sort").innerHTML = "Name DESC"
    resetAndAdd()
}

function Level_ASC() {
    users.sort(sort_by('level', true, parseInt));
    document.getElementById("Sort").innerHTML = "Level ASC"
    resetAndAdd();
}

function Level_DESC() {
    users.sort(sort_by('level', false, parseInt));
    document.getElementById("Sort").innerHTML = "Level DESC"
    resetAndAdd();
}


//tìm kiếm 

function search() {
    let SearchArr = [];
    const search = document.getElementById("search").value;
    let obj = users.find(o => o.task === search);
    var a = typeof(obj);
    console.log(a);
    if (search == '') {
        resetAndAdd();
    } else {
        SearchArr.push(obj);
        document.getElementById("show").innerHTML = " ";
        arrToList(SearchArr);
    }


}