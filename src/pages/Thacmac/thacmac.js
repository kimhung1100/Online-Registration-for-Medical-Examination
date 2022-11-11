
const style_card_collapses=document.querySelectorAll('.style_card_collapse')
var i;
for (i = 0; i<style_card_collapses.length; i++) {
    const style_collapse_active=style_card_collapses[i].querySelector('.style_collapse_active')
    const style_card_collapse_item=style_card_collapses[i].querySelector('.style_card_collapse_item')
    const icon=style_card_collapse_item.querySelector('i')
    style_card_collapses[i].addEventListener('click', function open_detail_question(){
        if(style_collapse_active.classList.contains('opening')){
            style_collapse_active.classList.remove('opening')
            setTimeout(function(){
                style_collapse_active.classList.remove('opening_border')
            }, 750)
            style_card_collapse_item.classList.remove('style_active')
            icon.classList.remove('fa-angle-up')
            icon.classList.add('fa-angle-down')
        }
        else{
            var j;
            for (j = 0; j<style_card_collapses.length; j++){
                const style_collapse_active_other=style_card_collapses[j].querySelector('.style_collapse_active')
                const style_card_collapse_item_other=style_card_collapses[j].querySelector('.style_card_collapse_item')
                const icon_other=style_card_collapse_item_other.querySelector('i')
                if (style_collapse_active_other != style_collapse_active && style_collapse_active_other.classList.contains('opening')){
                    style_collapse_active_other.classList.remove('opening')
                    style_card_collapse_item_other.classList.remove('style_active')
                    icon_other.classList.remove('fa-angle-up')
                    icon_other.classList.add('fa-angle-down')
                    setTimeout(function(){
                            style_collapse_active_other.classList.remove('opening_border')
                    }, 750)
                    icon.classList.remove('fa-angle-up')
                    icon.classList.add('fa-angle-down')
                    style_card_collapse_item.classList.add('style_active')
                    style_collapse_active.classList.add('opening')
                    style_collapse_active.classList.add('opening_border')
                    style_collapse_active_other.classList.add('collapsing')
                }     
            }
            if (j == style_card_collapses.length)
            {
                style_collapse_active.classList.add('opening')
                style_collapse_active.classList.add('opening_border')
                style_card_collapse_item.classList.add('style_active')
                icon.classList.remove('fa-angle-down')
                icon.classList.add('fa-angle-up')
            }
        } 
    })
}

const list_group_items=document.querySelectorAll('a.list-group-item')
const style_list_questions=document.querySelectorAll('.style_list_question')
var i
for(i=0; i<list_group_items.length; i++){
    const list_group_item = list_group_items[i]
    const style_list_question = style_list_questions[i]
    console.log(list_group_item)
    list_group_item.addEventListener('click', function (){
        list_group_item.classList.add('style_active')
        style_list_question.classList.add('show')
        var j
        for(j=0; j<list_group_items.length; j++){
            const list_group_item_other = list_group_items[j]
            const style_list_question_other = style_list_questions[j]
            if(list_group_item_other != list_group_item)
            {
                list_group_item_other.classList.remove('style_active')
                style_list_question_other.classList.remove('show')
            }
        }
    })
}