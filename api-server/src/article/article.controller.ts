import { Request, Response } from 'express';
import { TodoService } from './article.service';
// import { CreateTodoDto } from './dto/create-article.dto';
// import { UpdateTodoDto } from './dto/update-article.dto';

// TodoServiceのインスタンスを1度だけ生成
const todoService = new TodoService();

/**
 * Get all todos
 *
 * @route GET /api/todos
 */
export const findAll = async (req: Request, res: Response) => {
  try {
    // データベースからすべてのtodoを取得
    // テストが導入しやすいように、controller とservice を分離している
    const allTodos = await todoService.findAll(req.body.userId);
    // 取得したtodoをJSONレスポンスとしてクライアントに送信
    res.status(200).json(allTodos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

/**
 * Get find todoDetail
 *
 * @route GET /api/todo/:id
 */
export const findOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const todo = await todoService.findOne(parseInt(id, 10), userId);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/**
 * Create New todo
 *
 * @route POST /api/todo
 */
export const create = async (req: Request, res: Response) => {
  try {
    const { userId, title, content } = req.body as CreateTodoDto;

    const createTodo = await todoService.create({
      userId: userId,
      title: title,
      content: content,
    });

    res.status(200).json(createTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

/**
 * Update a todo by ID
 *
 * @route PUT /api/todo/:id
 */
export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body as UpdateTodoDto;

  try {
    const updateTodo = await todoService.update(parseInt(id, 10), {
      title: title,
      content: content,
    });

    if (!updateTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(updateTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

/**
 * Delete a todo by ID
 *
 * @route DELETE /api/todo/:id
 */
export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleteTodo = await todoService.remove(parseInt(id, 10));

    if (!deleteTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.status(200).json(deleteTodo);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
