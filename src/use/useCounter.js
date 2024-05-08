import { reactive, computed, watch, onMounted, nextTick } from 'vue'

const counterData = reactive({
  count: 0,
  title: "My Title"
})

export function useCounter(){
    
      watch(() => counterData.count, (newCount) => {
        if(newCount === 10){
          alert("New Count is: " + newCount)
        }
      })
    
      const oddOrEven = computed(() => {
        if(counterData.count % 2 === 0) return 'Even'
        return 'Odd'
      })
    
      const increaseCounter = async (amount, e) => {
        counterData.count += amount
        await nextTick()
          console.log('Do something when counter is updated in DOM')
      }
      
      const decreaseCounter = amount => {
        counterData.count -= amount
      }
    
    onMounted(() => {
      console.log("Do stuff related with Counter")
    })

    return{
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter,
    }
}