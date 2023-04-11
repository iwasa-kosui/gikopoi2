const { inject, watch, ref } = Vue

const fallbackUserName = "N/A"

export default {
    props: ["userId", "userName"],
    template: "#component-username",
    setup(props)
    {
        const users = inject('users')
        const highlightedUserId = inject('highlightedUserId')
        const highlightUser = inject('highlightUser')
        const ignoredUserIds = inject('ignoredUserIds')
        
        const properUserName = props.userName
            || users[highlightedUserId]
            || fallbackUserName
        
        const userName = ref()
        
        const setUserName = () =>
        {
            userName.value = ignoredUserIds.value.has(props.userId)
                ? fallbackUserName
                : properUserName
        }
                
        watch(ignoredUserIds, setUserName, { deep: true })
        setUserName()
        
        return {
            highlightedUserId,
            highlightUser,
            
            userId: props.userId,
            userName,
        }
    },
}
