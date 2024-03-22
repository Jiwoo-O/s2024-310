<script>
  $(document).ready(function () {
    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      // 다른 옵션들을 추가할 수 있습니다.
      events: [
        {
          title: '이벤트 제목',
          start: '2024-03-10T10:00:00',
          end: '2024-03-10T12:00:00'
        },
        // 다른 이벤트들을 추가할 수 있습니다.
      ]
    })
  });


  $(document).ready(function () {
    $('#calendar').fullCalendar({
      // 기존 설정...
      eventClick: function (event, jsEvent, view) {
        // 이벤트 클릭 시 동작할 함수 호출
        showEventDetails(event);
      }
    })
  });

  function showEventDetails(event) {
    // 클릭한 이벤트의 정보를 사용하여 팝업창 열기
    // 세부 내용을 표시하고 파일 첨부 기능 추가
    // 예를 들어, 모달 창을 사용할 수 있습니다.
  }

  
</script>

