import { stateMappingData } from '../../static/data/allStates'

export function getAllStateIds() {
  return stateMappingData.map(state => {
    return {
      params: {
        id: state.id,
      }
    }
  })
}

export function getAllStateData() {
  return stateMappingData.map(state => {
    return {
      params: {
        id: state.id,
        val: state.val,
        name: state.stateName
      }
    }
  })
}


export async function getStateData(id: string) {
  return {
    id
  }
}

// export async function getPostData(id: string) {
//   const fullPath = path.join(postsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content)
//   const contentHtml = processedContent.toString()

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...(matterResult.data as { date: string; title: string })
//   }
// }

