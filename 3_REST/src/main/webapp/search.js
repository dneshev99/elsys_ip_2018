function byFields() {
    var check = {};

    $('#table').empty();

        $('#table').append("<tr>"
            +"<td>" + "ID" +"</td>"
            + "<td>" + "Manufacturer" + "</td>"
            + "<td>" + "Model" + "</td>"
            + "<td>" + "Megapixels" + "</td>"
            + "<td>" + "MinISO" + "</td>"
            + "<td>" + "MaxISO" + "</td>"
            + "<td>" + "Shooting Speed" + "</td>"
            + "<td>" + "Video Recording" + "</td>"
            + "<td>" + "AF Points" + "</td>"
            + "<td>" + "Cross Type AF Points" + "</td>"
            + "<td>" + "Lens" + "</td>"
            + "<td>" + "Display" + "</td>"
            + "<td>" + "Price" + "</td>"
            + "</tr>");

    check["manufacturer"] = $("#manufacturer").val();
    check["model"] = $("#model").val();
    check["megapixels"] = $("#megapixels").val();
    check["minISO"] = $("#minISO").val();
    check["maxISO"] = $("#maxISO").val();
    check["shootingSpeed"] = $("#shootingSpeed").val();
    check["videoRecording"] = $("#videoRecording").val();
    check["afPoints"] = $("#afPoints").val();
    check["crossTypeAFPoints"] = $("#crossTypeAFPoints").val();
    check["price"] = $("#price").val();

    var  params = checkInput(check);

    $.getJSON("http://localhost:8080/api/camera/searchByField",params,function (data) {
        $.each(data,function(i,item){
            $('table').append(
                "<tr>"
                +"<td>" + item.id + "</td>"
                +"<td>"+item.manufacturer+"</td>"
                +"<td>"+item.model+"</td>"
                +"<td>"+item.megapixels+"</td>"
                +"<td>"+item.minISO+"</td>"
                +"<td>"+item.maxISO+"</td>"
                +"<td>"+item.shootingSpeed+"</td>"
                +"<td>"+item.videoRecording+"</td>"
                +"<td>"+item.afPoints+"</td>"
                +"<td>"+item.crossTypeAFPoints+"</td>"
                +"<td>"+JSON.stringify(item.lens)+"</td>"
                +"<td>"+JSON.stringify(item.display)+"</td>"
                +"<td>"+item.price+"</td>"
                +"<td>"+"<button class='editButton' onclick=''>" + "EDIT" + "</button>" + "</td>"
                +"<td>"+"<button class='deleteButton' onclick=''>" + "DELETE" + "</button>" + "</td>"
                +"</tr>" );
        })
    });

}




function checkInput(check) {
    var params ={};
    if (check["manufacturer"]) {
        params["manufacturer"] = check["manufacturer"];
    }
    if (check["model"]) {
        params["model"] = check["model"];
    }
    if (check["megapixels"]) {
        params["megapixels"] = check["megapixels"];
    }
    if (check["minISO"]) {
        params["minISO"] = check["minISO"];
    }
    if (check["maxISO"]) {
        params["maxISO"] = check["maxISO"];
    }
    if (check["shootingSpeed"]) {
        params["shootingSpeed"] = check["shootingSpeed"];
    }
    if (check["videoRecording"]) {
        params["videoRecording"] = check["videoRecording"];
    }
    if (check["afPoints"]) {
        params["afPoints"] = check["afPoints"];
    }
    if (check["crossTypeAFPoints"]) {
        params["crossTypeAFPoints"] = check["crossTypeAFPoints"];
    }
    if (check["price"]) {
        params["price"] = check["price"]
    }

    return params;
}
